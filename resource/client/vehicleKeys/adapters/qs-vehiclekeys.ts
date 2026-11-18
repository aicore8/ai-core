import { callExport } from "@aicore8/lib/client";
import type { VehicleKeysClientAdapter } from "@aicore8/shared";

/** Quasar qs-vehiclekeys client exports by plate and model name (untested on ai-core). */
export const qsVehicleKeys: VehicleKeysClientAdapter = {
  resource: "qs-vehiclekeys",
  give: (vehicle, plate) =>
    void callExport(
      "qs-vehiclekeys",
      "GiveKeys",
      plate,
      GetDisplayNameFromVehicleModel(GetEntityModel(vehicle)),
      true,
    ),
  remove: (vehicle, plate) =>
    void callExport(
      "qs-vehiclekeys",
      "RemoveKeys",
      plate,
      GetDisplayNameFromVehicleModel(GetEntityModel(vehicle)),
    ),
};
