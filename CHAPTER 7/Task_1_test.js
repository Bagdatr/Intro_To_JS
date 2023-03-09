let n = prompt("Please enter")
let number = prompt().split(" ")
let m = prompt()
let avCanEnter = false
for (let i = 0; i < n; i++) {
    if (number[i] === m) {
        avCanEnter = true
        alert("YES" + " " + i)
        break
    }
    }
     if(!avCanEnter)
    alert("NO")