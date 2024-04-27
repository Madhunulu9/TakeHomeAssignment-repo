import {test} from "@playwright/test"
import heartRateData from "../heartrate.json"


test('calculate heart rate statistics', async () => {

  // to calculate median
  const median = (values: number[]) => {
    if (values.length === 0) throw new Error("No inputs");
    values.sort((a, b) => a - b);
    const half = Math.floor(values.length / 2);
    if (values.length % 2) return values[half];
    return (values[half - 1] + values[half]) / 2.0;
  };

  // Calculate statistics
  const bpmValues = heartRateData.map(data => data.beatsPerMinute);
  const minBPM = Math.min(...bpmValues);
  const maxBPM = Math.max(...bpmValues);
  const medBPM = median(bpmValues);
  const latestTimestamp = heartRateData[heartRateData.length - 1].timestamps.endTime;

  // Output results
  console.log(`Minimum BPM: ${minBPM}`);
  console.log(`Maximum BPM: ${maxBPM}`);
  console.log(`Median BPM: ${medBPM}`);
  console.log(`latestDataTimestamp: ${latestTimestamp}`);
});