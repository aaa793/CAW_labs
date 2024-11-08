
const exf = require('./echo');

describe('exf function', () => {
  it('should print "echo" 5 times', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    exf("echo", 5);
    expect(consoleSpy).toHaveBeenCalledTimes(5);
    expect(consoleSpy).toHaveBeenCalledWith("echo");
    consoleSpy.mockRestore();
  });

  it('should print "JS from server" 10 times', () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    exf("JS from server", 10);
    expect(consoleSpy).toHaveBeenCalledTimes(10);
    expect(consoleSpy).toHaveBeenCalledWith("JS from server");
    consoleSpy.mockRestore();
  });
});
