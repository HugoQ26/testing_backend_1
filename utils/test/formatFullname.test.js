const formatFullname = require('../formatFullname');
const { expect } = require('chai');

console.log(formatFullname('joHn dOe'));

describe('formatFullname', () => {
  it('should return an full name formated despite typing', () => {
    expect(formatFullname('joHn dOe')).to.equal('John Doe');
    expect(formatFullname('JOHN DOE')).to.equal('John Doe');
    expect(formatFullname('john doe')).to.equal('John Doe');
  });

  it('should return an Error when no arguments passed', () => {
    expect(formatFullname()).to.equal('Error');
  });

  it('should return an Error argument is Not a string', () => {
    expect(formatFullname(2)).to.equal('Error');
    expect(formatFullname([])).to.equal('Error');
    expect(formatFullname({})).to.equal('Error');
    expect(formatFullname(function() {})).to.equal('Error');
  });

  it('should return an Error when string is in bad format <name> <surname>', () => {
    expect(formatFullname('John Doe Fin')).to.equal('Error');
    expect(formatFullname('John')).to.equal('Error');
  });
});
