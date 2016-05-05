// TODO This isn't a great name because it's also used to represent a no-ad
///decision, when only a `slotId` is provided
// TODO This file should probably be elsewhere
export class FlightedAd {
  constructor(
    public slotId: string,
    public campaignId?: number,
    public flightId?: number,
    public creativeId?: number,
    public adId?: number,
    public advertiserId?: number
  ) {}
}
