import { DisplayProcessor, SpecReporter } from 'jasmine-spec-reporter';

class CustomProcessor extends DisplayProcessor {
  public displayJasmineStarted(info: unknown, log: string): string {
    return `TypeScript Jasmine Started: ${log}`;
  }
}

jasmine.getEnv().clearReporters();
jasmine.getEnv().addReporter(
  new SpecReporter({
    spec: {
      displayPending: true,
      displayDuration: true,
    },
    customProcessors: [CustomProcessor],
  }),
);
