import { PlayerState, stateBoolean } from "@aicore8/lib/client";
import type { PhoneClientAdapter } from "@aicore8/shared";
import { onOwnOpen } from "../ownState";

/** gksphone (GKSPHONE V2): player state bag `phoneOpen` (docs.gkshop.org/gksphone-v2/exports-and-events/state-bags). */
const open = new PlayerState("phoneOpen", stateBoolean);

export const gksPhone: PhoneClientAdapter = {
  resource: "gksphone",
  watch: (opened) => onOwnOpen(open, opened),
};
