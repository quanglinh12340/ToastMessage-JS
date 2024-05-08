function toast({
    title = '',
    message = '',
    type = 'info',
    duration = 3000
}) {
    const main = document.getElementById('toast')
    if (main) {
        const toast = document.createElement('div');
        const autoRemoveId = setTimeout(() => {
            main.removeChild(toast);
            
        }, duration+1000);
        toast.onclick = function(e) {
            console.log("🚀 ~ e:", e)
            if (e.target.closest('.toast__close')) {
                main.removeChild(toast);
                clearTimeout(autoRemoveId)
            }
        }
        toast.classList.add('toast', `toast--${type}`);
        const icons = {
            success: "fas fa-check-circle",
            info: "fas fa-info-circle",
            warning: "fas fa-exclamation-circle",
            error: "fas fa-exclamation-circle",
        }
        const icon = icons[type];
        const delay = ((duration/1000)).toFixed(2)
        toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`
        toast.innerHTML = `
        <div class="toast__icon">
            <i class="${icon}"></i>
        </div>
        <div class="toast__body">
            <h3 class="toast__title">${title}</h3>
            <p class="toast__msg">${message}</p>
        </div>
        <div class="toast__close">
            <i class="fas fa-times"></i>
        </div>
        `
        main.appendChild(toast)
    }
}

const showSuccessBtn = document.querySelector('.btn--success')
showSuccessBtn.onclick = function() {
    toast({
        title: 'Thành công',
        message: 'Đăng ký thành công!',
        type: 'success',
        duration : 3000
    })
}
const showErrorBtn = document.querySelector('.btn--danger')
showErrorBtn.onclick = function() {
    toast({
        title: 'Thất bại',
        message: 'Đăng ký thất bại ! Vui lòng đăng ký lại',
        type: 'error',
        duration : 3000
    })
}