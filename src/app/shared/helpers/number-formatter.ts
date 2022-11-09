export class NumberFormatter {
    static roundToFiveDecimalPlaces(value: number): number {
        const roundedValue = (Math.ceil(value * 20) / 20).toFixed(2);
        return parseFloat(roundedValue);
    }

    static toFixed(value: number): number {
        const roundedValue = value.toFixed(2);
        return parseFloat(roundedValue);
    }
}
