import { UtilidadesModule } from './utilidades.module';

describe('UtilidadesModule', () => {
  let utilidadesModule: UtilidadesModule;

  beforeEach(() => {
    utilidadesModule = new UtilidadesModule();
  });

  it('should create an instance', () => {
    expect(utilidadesModule).toBeTruthy();
  });
});
