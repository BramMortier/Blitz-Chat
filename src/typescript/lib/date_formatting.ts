// ------------------------------------------- //
// module imports

// ------------------------------------------- //

export const timestampFormat = (timestamp: any): string => {
    let hours: string = timestamp.toDate().getHours();
    let minutes: string = timestamp.toDate().getMinutes();

    if (parseInt(hours) < 10) hours = `0${hours}`;
    if (parseInt(minutes) < 10) minutes = `0${minutes}`;

    return `${hours}h ${minutes}`;
};
