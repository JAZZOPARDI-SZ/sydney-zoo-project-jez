import moment from "moment";

export const firstAvailableDate = (availabilities) => {
    const firstDate = Object.entries(availabilities).find(a => firstAvailableTime(a[1]))

    if (!firstDate) return null;

    return firstDate;
}

export const firstAvailableTime = (availability) => {
    return availability.find(b => isAvailable(b));
}

export const normalizeAvailabilities = (availabilities) => {
    return availabilities.reduce(function (r, a) {
        const mutatedDate = moment(a.date.replaceAll(/\//g, '')).format('MM-DD-YYYY');
        const mutatedTime = moment(a.time.replaceAll(/\//g, '')).format('hh:mm A');

        r[mutatedDate] = r[mutatedDate] || [];
        r[mutatedDate].push({
            ...a,
            date: mutatedDate,
            time: mutatedTime,
            timeDescription: a.productLongDescription?.replace(a.productCode, '').substring(3)
        });
        return r;
    }, {}) || {};
}

export const isAvailable = (availability) => {
    return availability.availabilityString !== "departed";
}