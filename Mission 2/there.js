var containA = document.getElementById('title1')
var containB = document.getElementById('title2')
var user = document.querySelectorAll('.member')
var butt = document.querySelectorAll('.follow-button')
let friends = document.getElementById('count')

for(let i = 0;i < butt.length;i++)  
{
  butt[i].addEventListener('click', function()
  {
    butt[i].classList.toggle('unfollow-button')

    if(butt[i].classList.toggle('follow-button'))
    {
      friends = friends - 1
      containA.appendChild(user[i])

    }
    else
    {
      friends = friends + 1
      containB.appendChild(user[i])
      
    }
    // title2.innerHTML=`My Friends (${friends})`
  })
}