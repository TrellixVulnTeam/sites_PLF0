import i18n from "i18next";
import '../classes/App.css'

export let last = []


const element = (tag, classes = [], content, types, ids) => {
    const node = document.createElement(tag)

    if (classes.length) {
        node.classList.add(...classes)
    }

    if (content) {
        node.textContent = content
    }

    if (types) {
        node.setAttribute('type', types)
    }

    if (ids) {
        node.setAttribute('id', ids)
    }

    return node
}

function noop() {
}

export function upload(selector, options = {}) {

    let files = []
    const onUpload = options.onUpload ?? noop
    const input = document.querySelector(selector)
    const preview = element('div', ['preview'])

    const open = document.createElement('Button')
    open.setAttribute('type', 'button')
    open.textContent = i18n.t('upload_js_choise')
    const upload = element('Button', ['displayNone'], "Загрузить", 'button', 'buttonForPhoto')

    if (options.multi) {
        input.setAttribute('multiple', true)
    }

    if (options.require) {
        input.setAttribute('required', true)
    }

    if (options.accept && Array.isArray(options.accept)) {
        input.setAttribute('accept', options.accept.join(','))
    }

    input.insertAdjacentElement('afterend', preview)
    input.insertAdjacentElement('afterend', upload)
    input.insertAdjacentElement('afterend', open)

    const triggerInput = () => input.click()

    const changeHandler = (event) => {
        if (!event.target.files.length) {
            return
        }

        files = (Array.from(event.target.files))


        let count = 0,
            result = ['123123']

        for (let i = files.length; i > 0; i--) {
            for (let j = result.length; j > 0; j--) {
                if (last.length !== 0) {
                    if (last[j - 1].name === files[i - 1].name) {
                        files.splice(i - 1, 1)
                        count++
                        continue
                    }
                }
            }
            if (count === 0) {
                last.push(files[i - 1]);
            }
            count = 0
            result = last
        }

        // console.log("Last: ", last, "\nFiles: ", files)

        //test.push(...last.filter((file) => !last.includes(file)))
        files.forEach(file => {
            if (!file.type.match('image')) {
                return
            }

            const reader = new FileReader()

            reader.onload = ev => {
                const src = ev.target.result
                preview.insertAdjacentHTML('afterbegin', `
                <div class="preview-image">
                <div class="preview-remove" data-name="${file.name}">&times;</div>
                    <img src='${src}' alt='${file.name}'/>
                    <p>${file.name}</p>
                </div>
                `)
            }

            reader.readAsDataURL(file)
        })

    }

    const removeHandler = event => {
        if (!event.target.dataset.name) {
            return
        }

        const {name} = event.target.dataset
        files = files.filter(file => file.name !== name)
        last = last.filter(last => last.name !== name)
        const block = preview
            .querySelector(`[data-name="${name}"]`)
            .closest('.preview-image')
        block.remove()
    }

    const uploadHandler = () => {
        onUpload(last)
    }

    open.addEventListener('click', triggerInput)
    input.addEventListener('change', changeHandler)
    preview.addEventListener('click', removeHandler)
    upload.addEventListener('click', uploadHandler)

}