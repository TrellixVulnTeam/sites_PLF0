import i18n from "i18next";


export let last = []

export function upload(selector, options = {}) {

    let files = []
    const input = document.querySelector(selector)
    const preview = document.createElement('div')

    const open = document.createElement('Button')
    open.setAttribute('type','button')
    open.textContent = i18n.t('upload_js_choise')

    if (options.multi) {
        input.setAttribute('multiple', true)
    }

    if (options.accept && Array.isArray(options.accept)) {
        input.setAttribute('accept', options.accept.join(','))
    }

    input.insertAdjacentElement('afterend', preview)
    input.insertAdjacentElement('afterend', open)

    const triggerInput = () => input.click()

    const changeHandler = (event) => {
        if (!event.target.files.length) {
            return
        }

        files = (Array.from(event.target.files))

        for (let i = 0; i < files.length; i++) {
            last.push(files[i]);
        }

        files.forEach(file => {
            if (!file.type.match('image')) {
                return
            }

            const reader = new FileReader()

            reader.onload = ev => {
                const src = ev.target.result
                preview.insertAdjacentHTML('afterbegin', `
                <div class="preview-image" style="
                margin-bottom: 0.5rem; 
                margin-right: 0.5rem; 
                margin-top: .5rem; 
                position: relative">
            
                    <img src='${src}' alt='${file.name}' style="width: 160px; height: auto"/>
                    <p>${file.name}</p>
                </div>
                `)
            }

            reader.readAsDataURL(file)
        })

    }


    open.addEventListener('click', triggerInput)
    input.addEventListener('change', changeHandler)
}