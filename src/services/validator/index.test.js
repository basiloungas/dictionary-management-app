import Validator from './index';

describe('Services > Validator', () => {
  let dictionary;

  const duplicateDomainErrorResult = {
    message: 'Duplicate Domain validation error',
    severity: 'NORMAL',
  };

  const duplicateDomainRangeErrorResult = {
    message: 'Duplicate Domain Range validation error',
    severity: 'NORMAL',
  };

  const chainErrorResult = {
    message: 'Chain validation error',
    severity: 'NORMAL',
  };

  const cycleErrorResult = {
    message: 'Cycle validation error',
    severity: 'HIGH',
  };

  beforeEach(() => {
    dictionary = {
      id: 1,
      name: 'Sample Dictionary',
      entries: []
    };
  });

  it('validates "Duplicate domain" case', () => {
    const validator = new Validator();
    dictionary.entries = [
      {
        id: 'entry-1',
        domain: 'Stonegray',
        range: 'Dark Grey'
      },
      {
        id: 'entry-11',
        domain: 'Stonegray',
        range: 'Some other value'
      }
    ];

    const result = validator.validate(dictionary);

    expect(result.hasErrors).toBe(true);
    expect(result.entries[0].errors.duplicateDomain).toEqual(duplicateDomainErrorResult);
    expect(result.entries[1].errors.duplicateDomain).toEqual(duplicateDomainErrorResult);
  });

  it('validates "Duplicate domain range" case', () => {
    const validator = new Validator();
    dictionary.entries = [
      {
        id: 'entry-1',
        domain: 'Stonegray',
        range: 'Dark Grey'
      },
      {
        id: 'entry-11',
        domain: 'Stonegray',
        range: 'Dark Grey'
      }
    ];

    const result = validator.validate(dictionary);

    expect(result.hasErrors).toBe(true);
    expect(result.entries[0].errors.duplicateDomainRange).toEqual(duplicateDomainRangeErrorResult);
    expect(result.entries[1].errors.duplicateDomainRange).toEqual(duplicateDomainRangeErrorResult);
  });

  it('validates "Chain" case', () => {
    const validator = new Validator();
    dictionary.entries = [
      {
        id: 'entry-1',
        domain: 'Stonegray',
        range: 'Dark Grey'
      },
      {
        id: 'entry-11',
        domain: 'Dark Grey',
        range: 'Something Else'
      }
    ];

    const result = validator.validate(dictionary);

    expect(result.hasErrors).toBe(true);
    expect(result.entries[0].errors.chain).toEqual(chainErrorResult);
    expect(result.entries[1].errors.chain).toEqual(chainErrorResult);
  });

  it('validates "Cycle" case', () => {
    const validator = new Validator();
    dictionary.entries = [
      {
        id: 'entry-1',
        domain: 'Stonegray',
        range: 'Dark Grey'
      },
      {
        id: 'entry-11',
        domain: 'Dark Grey',
        range: 'Stonegray'
      }
    ];

    const result = validator.validate(dictionary);

    expect(result.hasErrors).toBe(true);
    expect(result.entries[0].errors.cycle).toEqual(cycleErrorResult);
    expect(result.entries[1].errors.cycle).toEqual(cycleErrorResult);
  });

  it('validates multiple case at the same time', () => {
    const validator = new Validator();
    dictionary.entries = [
      {
        id: 'entry-1',
        domain: 'Stonegray',
        range: 'Dark Grey'
      },
      {
        id: 'entry-11',
        domain: 'Dark Grey',
        range: 'Stonegray'
      },
      {
        id: 'entry-111',
        domain: 'Dark Grey',
        range: 'Some other value'
      }
    ];

    const result = validator.validate(dictionary);

    expect(result.hasErrors).toBe(true);
    expect(result.entries[0].errors).toEqual({
      cycle: cycleErrorResult,
      chain: chainErrorResult,
    });
    expect(result.entries[1].errors).toEqual({
      cycle: cycleErrorResult,
      duplicateDomain: duplicateDomainErrorResult,
    });
    expect(result.entries[2].errors).toEqual({
      chain: chainErrorResult,
      duplicateDomain: duplicateDomainErrorResult,
    });
  });

});
