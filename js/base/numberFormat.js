var names={3:"k",6:" million",9:" billion",12:" trillion",15:" quadrillion",18:" quintillion",21:" sextillion",24:" septillion",27:" octillion",30:" nonillion",33:" decillion",36:" undecillion",39:" duodecillion",42:" tredecillion",45:" quattuordecillion",48:" quindecillion",51:" sexdecillion",54:" septendecillion",57:" octodecillion",60:" novemdecillion",63:" vigintillion"},numberFormat={setFormat:function(i){},format:function(i){if(void 0==i)return"???"
if(Math.abs(i)<10)return Math.round(100*i)/100
if(Math.abs(i)<1e3)return Math.round(10*i)/10
if(Math.abs(i)<1e6)return Number(i).toFixed(0).replace(/\d(?=(\d{3})+$)/g,"$& ")
i=i.toString().split("e+",2)
var l=i[0],n=0>l?2:1,e=3*Math.floor((Number(l).toFixed(0).length-n)/3),o=e+(i[1]?Number(i[1]):0),t=o%3
return l*=Math.pow(10,t-e),o-=t,Math.round(100*l)/100+(names[o]?names[o]:"e"+o)},test:function(){var i={1:"1",10:"10",10.5:"10.5",100:"100",100.5:"100.5",1e3:"1 000",1000.5:"1 001",1234.5:"1 235",0x69400dfdfc9950000:"121.35 quintillion",0x41c808bebddfd40000:"1.21 sextillion",1.2134523451212334e22:"12.13 sextillion",1.2134523451212333e23:"121.35 sextillion",1.2134523451212334e24:"1.21 septillion","121345234512123331233123412134523451212333123312341213452345121112.1":"121.35 vigintillion",1.4860535876960295e25:"14.86 septillion",9.026470548765505e24:"9.03 septillion",4.689829190868461e23:"468.98 sextillion",3.836127347506669e23:"383.61 sextillion",1.9180636737457225e22:"19.18 sextillion"}
for(var l in i){var n=this.format(new BigNumber(l))
n!=i[l]&&console.error(l+") "+n+" != "+i[l])
var n=this.format(new BigNumber("-"+l))
n!="-"+i[l]&&console.error(l+") "+n+" != -"+i[l])}}}
numberFormat.test()
