const simple={
    rebuildPage:()=>{simple.page={width:window.innerWidth,height:window.innerHeight}},
    save:(k,d)=>{localStorage.setItem(k,d)},
    load:(k)=>{return localStorage.getItem(k)},
    randint:(i,a)=>{return Math.floor(Math.random()*(a-i+1))+i},
    openURL:function(u){window.open(u,'_blank')},
    alert:function(t,m,b="Ok"){document.getElementsByTagName('body')[0].addHTML(`
        <div style="background-color:rgba(0,0,0,0.5);width:100%;position:fixed;left:0%;top:0%;height:100%;z-index:999998;" onclick="this.remove()">
            <div style="background-color:rgb(40,40,40);border-radius:10px;width:calc(30% - 25px);position:fixed;left:35%;top:18%;height:25%;z-index:999999;padding:0px 0px 0px 25px;">
                <h2>${t}</h2><hr style="width:40%;"><p>${m}</p>
                <div style="background-color:rgb(60,60,200);border-radius:8px;width:30%;position:absolute;left:calc(70% - 10px);top:calc(100% - 45px);height:27px;text-align:center;font-size:17px;padding:8px 0px 0px 0px;cursor:pointer;">${b}
                </div>
            </div>
        </div>
    `)},
    notif:function(m,d){
        if(idex("smplntif")){gid("smplntif").remove()}
        clearTimeout(simple.internal.tm_id)
        document.getElementsByTagName('body')[0].addHTML(`<div id="smplntif" style="background-color:rgb(40,40,40);border-radius:10px;width:20%;position:fixed;left:calc(80% - 20px);top:calc(100% - 77px);height:47px;z-index:999999;padding:20px 0px 0px 8px;font-size:20px;">${m}</div>`)
        simple.internal.tm_id=setTimeout(()=>{if(idex("smplntif")){gid("smplntif").remove()}},d*1000)
    },
    internal:{tm_id:0}
}
function gid(i){return document.getElementById(i)}
function gcn(i){return document.getElementsByClassName(i)}
function idex(i){return gid(i)!=null}
Object.prototype.preHTML=function(h){this.innerHTML=h+this.innerHTML}
Object.prototype.addHTML=function(h){this.innerHTML+=h}
Object.prototype.setHTML=function(h){this.innerHTML=h}
Object.prototype.hide=function(){this.style.display='none'}
Object.prototype.show=function(){this.style.display='block'}
Object.prototype.width=function(){return this.offsetWidth}
Object.prototype.height=function(){return this.offsetHeight}
Object.prototype.left=function(){return this.offsetLeft}
Object.prototype.top=function(){return this.offsetTop}
Object.prototype.ael=function(e,c){this.addEventListener(e,c)}
Object.prototype.rel=function(e,c){this.removeEventListener(e,c)}
Array.prototype.sample=function(){return this[Math.floor(Math.random()*this.length)]}
String.prototype.isUpper=function(){if(this.toUpperCase()==this){return true}return false}
String.prototype.isLower=function(){if(this.toLowerCase()==this){return true}return false}
String.prototype.isEmpty=function(){if(this.replaceAll(/ /g,'')==''){return true}else return false}
String.prototype.JSONify=function(){return JSON.parse(this)}
String.prototype.invertCase=function(){return this.split('').map((a)=>{return a.isUpper()?a.toLowerCase():a.toUpperCase()}).join('')}
window.addEventListener('resize',simple.rebuildPage)
simple.rebuildPage()
