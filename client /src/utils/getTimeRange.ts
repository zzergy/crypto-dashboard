/**
 * Utility to get ISO date strings for a time range ending today and starting `daysBack` days ago.
 * @param daysBack Number of days back from today to set as the start date.
 * @returns Object containing the start and end date strings.
 */
export const getTimeRange = (daysBack: number) => {
    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - daysBack);

    return {
        startDate: start.toISOString(),
        endDate: end.toISOString(),
    };
};
