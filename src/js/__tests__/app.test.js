import ErrorRepository from '../app';

test('should throw an error description "Bad Gateway"', () => {
    const error = new ErrorRepository;
    
    expect(error.translate(502)).toBe('Bad Gateway');
});

test('should throw the error "Uncnown error"', () => {
    const error = new ErrorRepository;
    
    expect(() => error.translate(514)).toThrow('Uncnown error');
});


