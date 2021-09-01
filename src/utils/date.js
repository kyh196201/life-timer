/**
 *
 * @param {number} 분|초
 * @returns {string} '0' + 분|초
 */
const formatTime = value => (value < 10 ? `0${value}` : '' + value);

export {formatTime};
