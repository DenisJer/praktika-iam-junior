document.addEventListener('DOMContentLoaded', function(){
    let cards = []

    const forma = document.getElementById('forma')
    forma.addEventListener('submit', function (event) {
        event.preventDefault();
        
        const paveiksliukoKelias = document.getElementById('paveiksliukoKelias')
        const antrastesTekstas = document.getElementById('antrastesTekstas')
        const paragrafoTekstas = document.getElementById('paragrafoTekstas')
        const mygtukoTekstas = document.getElementById('mygtukoTekstas')
        const mygtukoNuoroda = document.getElementById('mygtukoNuoroda')
        cards = [...cards, {
            paveiksliukoKelias: paveiksliukoKelias.value,
            paveiksliukoAltTekstas: paveiksliukoKelias.value,
            antrastesTekstas: antrastesTekstas.value,
            paragrafoTekstas: paragrafoTekstas.value,
            mygtukoTarget: '_blank',
            mygtukoTekstas: mygtukoTekstas.value,
            mygtukoNuoroda: mygtukoNuoroda.value
        }]
        uzkrautiKorteliuDuomenis(cards)
        forma.reset();
    })

    const sectionCard = document.getElementById('section-card')
    sectionCard.innerText = 'Kraunami duomenys...'

    function uzkrautiKorteliuDuomenis(korteles) {
        // console.log(korteles)

        sectionCard.innerText = ''

        korteles.forEach(function(kortele) {
            // console.log(kortele)
            // SUKURIAM PAGRINDINI CARD DIV
            const divElementas = document.createElement('div')
            divElementas.classList.add('card')
            // SUKURIAM PICTURE TAG
            const pictureElementas = document.createElement('pricture')
            pictureElementas.classList.add('icon')
            // SUKURIAM IMG TAG
            const imgElementas = document.createElement('img')
            imgElementas.src = kortele.paveiksliukoKelias
            imgElementas.alt = kortele.paveiksliukoAltTekstas

            // SUKURIAM INNER DIV
            const turinioDivElementas = document.createElement('div')
            turinioDivElementas.classList.add('card__content')
            
            // SUKURIAM h2 TAG
            const antrasteDu = document.createElement('h2')
            antrasteDu.innerText = kortele.antrastesTekstas
            // SUKURIAM PARAGRAFA
            const paragrafoElementas = document.createElement('p')
            paragrafoElementas.innerText = kortele.paragrafoTekstas

            // CIA TURETU BUTI 1 ZYNGSNIS
            // 1 ZYNGSIO KODAS EINA CIA ZEMIAU SIOS EILUTES
            const aElementas = document.createElement('a')
            aElementas.classList.add('btn-primary')
            aElementas.href = kortele.mygtukoNuoroda
            aElementas.target = kortele.mygtukoTarget
            aElementas.innerText = kortele.mygtukoTekstas
            // INNER DIV PRIDEDAM H2 TAG'a
            turinioDivElementas.appendChild(antrasteDu)
            // INNDER DIV'ui PRIDEDAM P TAG'a
            turinioDivElementas.appendChild(paragrafoElementas);
            // CIA TURETU BUTI 2 ZYNGSNIS
            // 2 ZYNGSIO KODAS EINA CIA ZEMIAU SIOS EILUTES

            // CIA TURETU BUTI 3 ZYNGSNIS
            // 3 ZYNGSIO KODAS EINA CIA ZEMIAU SIOS EILUTES
            turinioDivElementas.appendChild(aElementas)


            // UZDUOTIS:
            // 1) PADARYT -> SUKURTI a TAG'a

            // 2) PRISKIRTI JAM LIKUSIU IPATYBIU REIKSMES (mygtukoTekstas/mygtukoNuoroda/mygtukoTarget)

            // 3) SUKURTA a ELEMENTA PRIDETI PRIE "turinioDivElementas" elemento

            // PRIE PICTURE ELEMENT PRIDEDAM IMG
            pictureElementas.appendChild(imgElementas)
            // PRIE PAGRINDINIO DIV PRIDEDAM PICTURE ( kurio viduje yra img)
            divElementas.appendChild(pictureElementas)
            // PRIE PAGRINDINIO DIV PRIDEDAM VIDINI DIV ( kurio viduje yra h2 ir p tagai su turiniu)
            divElementas.appendChild(turinioDivElementas)
            sectionCard.appendChild(divElementas)
        })
    }
})