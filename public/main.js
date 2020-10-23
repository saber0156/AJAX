
getCSS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/style.css')
    request.send()  // 发送请求
    request.onreadystatechange = () => {
        if(request.readyState === 4){    // readyState 存储着XMLHttpRequest的状态，从0-4 0：状态未初始化 1：服务器连接以建立 2：请求已接收 3：请求处理中 4：请求已完成，且响应已就绪
            if(request.status >= 200 && request.status < 300){    // status 状态码
                 let style = document.createElement("style")
                 style.innerHTML = request.response
                 document.head.appendChild(style)
            } else {
                 alert('加载失败了！')
            }
        }
    }
}
getJS.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/2.js')
    request.send()
    request.onreadystatechange = () => {
        if(request.readyState === 4){
           if(request.status >= 200 && request.status < 300){
               let script = document.createElement('script')
               script.innerHTML = request.response
               document.head.appendChild(script)
           } else {
               alert('加载失败了！')
           }
        }
    } 
    // request.onload = () => {
    //     let script = document.createElement('script')
    //     script.innerHTML = request.response
    //     document.body.appendChild(script)
    // }
    // request.onerror = () => {
    //     console.log('加载失败了！')
    // }
   
}
getHTML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/3.html')
    request.send()
    request.onreadystatechange = () => {
        if(request.readyState === 4){
           if(request.status >= 200 && request.status < 300){
              let div = document.createElement('div')
              div.innerHTML = request.response
              document.body.appendChild(div)
           } else {
               alert('加载失败了！')
           }
        }
    }
    // request.onload = () => {
    //     let div = document.createElement("div")
    //     div.innerHTML = request.response
    //     document.body.appendChild(div)
    // }
    // request.onerror = () => {
    //     console.log('加载失败了！')
    // }
   
}
getXML.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/4.xml')
    request.onreadystatechange = () => {
        if(request.readyState === 4){
            if(request.status >= 200 && request.status < 300) {
                const dom = request.responseXML
                const text = dom.getElementsByTagName('warning')[0].textContent
                console.log(text.trim())
            } else {
                alert('加载失败了！')
            }
        }
    }
    request.send()
}

getJSON.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', '/5.json')
    request.onreadystatechange = () => {
        if(request.readyState === 4){
            if(request.status >= 200 && request.status < 300){
                 const object = JSON.parse(request.response)
                 myName.textContent = object.name
            } else {
                alert('加载失败了！')
            }
        }
    }
    request.send()
}

let n = 1
getPage.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', `/page${n +1}.json`)
    request.onreadystatechange = () => {
        if(request.readyState === 4 && request.status === 200){
            if(request.status >= 200 && request.status < 300){
                // console.log(request.response)
                const array = JSON.parse(request.response)
                array.forEach(item => {
                    const li = document.createElement('li')
                    li.textContent = item.id
                    xxx.appendChild(li)
                });
                n += 1
            } else {
                alert('加载失败了！')
            }
        }
    }
    request.send()
}