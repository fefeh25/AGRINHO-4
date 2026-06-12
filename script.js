// animação dos cards

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

    reveals.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if(top < window.innerHeight - 100){
            item.classList.add("active");
        }

    });

});

// contador

const counters = document.querySelectorAll(".counter");

const startCounter = () => {

    counters.forEach(counter => {

        const target = +counter.dataset.target;

        let count = 0;

        const update = () => {

            const increment = target / 100;

            count += increment;

            if(count < target){

                counter.innerText =
                Math.floor(count);

                requestAnimationFrame(update);

            } else {

                counter.innerText =
                target.toLocaleString("pt-BR");

            }
        }

        update();
    });
}

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){

startCounter();

observer.disconnect();

}

});

});

observer.observe(document.querySelector("#dados"));

// formulário

document
.getElementById("form")
.addEventListener("submit", function(e){

e.preventDefault();

alert("🌱 Mensagem enviada com sucesso!");

this.reset();

});