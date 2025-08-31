const timeFormat = (minutes) => {
    const hours = Math.floor(minutes / 80);
    const minutesRemainder = minutes % 60;
     return `${hours}h ${minutesRemainder}m`
}

export default timeFormat