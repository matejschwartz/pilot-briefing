import { FlightBriefingModule } from './flight-briefing.module';

describe('FlightBriefingModule', () => {
  let flightBriefingModule: FlightBriefingModule;

  beforeEach(() => {
    flightBriefingModule = new FlightBriefingModule();
  });

  it('should create an instance', () => {
    expect(flightBriefingModule).toBeTruthy();
  });
});
