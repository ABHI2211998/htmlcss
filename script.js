const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header')

btnNavEl.addEventListener('click',function(){
    headerEl.classList.toggle('nav-open')
})


// scrolling
const allinks = document.querySelectorAll('a:link')
console.log(allinks)
allinks.forEach(function(link){
    link.addEventListener('click',function(e){
        e.preventDefault()
        const href = link.getAttribute('href')
        // console.log(href)

        if(href === '#')window.scrollTo({
            top:0,
            behavior:'smooth'

        })

        if(href !=='#' && href.startsWith('#')){
            const sectionEl = document.querySelector(href);
          
            sectionEl.scrollIntoView({behavior:'smooth'})
        }

        if(link.classList.contains('nav-open')){
            headerEl.classList.toggle('nav-open')
        }
    })
})


// navbar

const sectionHeroEl = document.querySelector('.section-hero');

const obs = new IntersectionObserver(
    function (entries){
    const ent = entries[0]
    if(ent.isIntersecting === false){
        document.body.classList.add('sticky')
    }
    
    if(ent.isIntersecting === true){
        document.body.classList.remove('sticky')
    }
        },
       {
        root:null,
        threshold,
        rootMargin:'-80%',
       }
        
        )
        obs.observe(sectionHeroEl )