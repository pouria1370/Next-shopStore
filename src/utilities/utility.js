export function paginate(current, max) {
	if (!current || !max) return null

	let prev = current === 1 ? null : current - 1,
			next = current === max ? null : current + 1,
			items = [1]

	if (current === 1 && max === 1) return {current, prev, next, items}
	if (current > 4) items.push('…')

	let r = 2, r1 = current - r, r2 = current + r

	for (let i = r1 > 2 ? r1 : 2; i <= Math.min(max, r2); i++) items.push(i)

	if (r2 + 1 < max) items.push('…')
	if (r2 < max) items.push(max)

	return {current, prev, next, items}
}
export function uuid(){
	const time = {min:new Date().getMinutes(),hour:new Date().getHours(),sec:new Date().getSeconds()};
	const id = time.sec + time.min - time.hour + Math.round(Math.random()*5000000000000)
	return id

}
export  const turnToPrice = (priceii,offii) => {
    let priceNumber = +priceii;
    priceNumber = offii ?  priceNumber - ((+(offii.slice(0,-1))) * priceNumber )/ 100 : priceNumber;
    let turnedOverprice = '' ; 
    let u = 0 ; 
    while(priceNumber > 1000)
    {
      u = u + 1;
      priceNumber = priceNumber/1000 
    }
    if ((priceNumber * 10) % 10 == 0) {
      for (let index = 0; index <= u; index++) {
        turnedOverprice = !turnedOverprice
          ? priceNumber + ","
          : index === u
          ? turnedOverprice + "000"
          : turnedOverprice + "000,";
      }
    }
    if ((priceNumber * 10) % 10 != 0) {
      for (let index = 0; index < u; index++) {
        turnedOverprice = !turnedOverprice
          ? Math.floor((priceNumber * 1000) / 1000) +
            "," +
            ((priceNumber * 1000) % 1000) +
            ","
          : index === u - 1
          ? turnedOverprice + "000"
          : turnedOverprice + "000,";
      }
    }
  return turnedOverprice
  }