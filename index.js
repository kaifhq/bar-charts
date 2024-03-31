const labelize=(n)=>n>=1e7?(n/1e6|0)+'m':n>=1e4?(n/1e3|0)+'k':n

export default ({data: d, ...rest}) => {
  let T=J='',
  N=d.length,
  max=d.reduce((a,i)=>a>i[1]?a:i[1]),
  B=Math.exp((0|Math.log10(max))*Math.LN10),
  [Y,A,X]=Array.from('yax',l=>{
    let c = []
    if (l=='y') {
      max=B+B*(max/B|0)
      for(let n=4,i=n;i>=0;){
        c.push({elem: 'div', innerText: labelize(i--*max/n|0)})
      }
    } else {
      c = d.map(p => l == 'a' ? ({
        elem: 'div',
        className: 'b',
        style: {
          height:100*p[1]/max+'%',
          width:100/N-1.6+'%',
          borderRadius: '.5rem .5rem 0 0',
          background: 'currentcolor',
          margin: '0 .8%',
        },
      }) : ({
        innerText: p[0]+'',
        style: {
          width:'100%',
          textAlign:'center',
        },
      }))
    }
    return {
      elem: 'div',
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: l=='x'?'flex-start':'flex-end',
        gridArea: l,
        flexDirection: l=='y'?'column':'',
        margin: l=='a'?'.8%':'',
      },
      children: c,
    }
  })


  return {
    ...rest,
    elem: 'div',
    style: {
      display: 'grid',
      gridTemplate: "'y a'1fr'n x'4ch/4ch 1fr",
    },
    children: [Y,A,X],
  }
}
