export default function addSerialNumber(source) {
  // TODO 5: 在这里写实现代码，需要采用ES6 Object.assign
  const target = {
    serialNumber: '12345',
    type: 'accessory',
    properties: {
      color: 'green',
      status: 'processed'
    }
  };
  return Object.assign(source, target);
}
