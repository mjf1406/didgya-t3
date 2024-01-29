export function formatMillisecondsToReadable(milliseconds: string | number, displayMilliseconds: boolean): string {
    const millisecondsNumber = typeof milliseconds === 'string' ? parseInt(milliseconds, 10) : milliseconds; // Convert the input to a number if it's a string
    const hours = Math.floor(millisecondsNumber / 3600000); // 1 Hour = 3600000 milliseconds
    const minutes = Math.floor((millisecondsNumber % 3600000) / 60000); // 1 Minute = 60000 milliseconds
    const seconds = Math.floor((millisecondsNumber % 60000) / 1000); // 1 Second = 1000 milliseconds
    const ms = millisecondsNumber % 1000; // Remainder milliseconds after removing hours, minutes, and seconds
    let timeString = "";
    if (hours > 0) timeString += `${hours}h `;
    if (minutes > 0) timeString += `${minutes}m `;
    if (seconds > 0) timeString += `${seconds}s `;
    if (ms > 0 && displayMilliseconds) timeString += `${ms}ms`;
    return timeString.trim(); // Removes any extra space at the end
}