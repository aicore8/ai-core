import { isRecord } from "@aicore8/lib/shared";
import type { PhoneClientAdapter } from "@aicore8/shared";

/**
 * qs-smartphone: local client event `phone:opened ({ mode: "full" | "peek" })`; a peek (notification view) is not a
 * use (quasar-store.com/docs/smartphone/commands-and-exports).
 */
export const qsSmartphone: PhoneClientAdapter = {
  resource: "qs-smartphone",
  watch: (opened) =>
    on("phone:opened", (payload: unknown) => {
      if (isRecord(payload) && payload.mode === "full") opened();
    }),
};
