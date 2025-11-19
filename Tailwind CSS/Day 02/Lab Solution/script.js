let mainContent = document.querySelector("main");
let loveIcons = document.querySelectorAll(".love-icon");
let heart = document.querySelector(".heart");
let cartButtons = document.querySelectorAll(".cart");


loveIcons.forEach(function (icon) {
    icon.addEventListener('click', function (e) {
        let [ht] = this.children;
        if (ht.getAttribute('fill') === 'none') {
            ht.setAttribute('fill', 'red');

            let lovedContainer = `<div class="toast">
  <div class="alert alert-info">
    <span>Item Loved.</span>
  </div>
</div>`;

            mainContent.insertAdjacentHTML('beforeend', lovedContainer);

            // Get the last toast element and remove it after 1 second
            let toastElements = mainContent.querySelectorAll('.toast');
            let lastToast = toastElements[toastElements.length - 1];
            setTimeout(function () {
                if (lastToast && lastToast.parentNode) {
                    lastToast.remove();
                }
            }, 1500);
        } else {
            ht.setAttribute('fill', 'none');
        }
    });
});

cartButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
        let toastContainer = `<div class="toast toast-top toast-end max-w-xs bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-neutral-800 dark:border-neutral-700" role="alert" tabindex="-1" aria-labelledby="hs-toast-success-example-label">
    <div class="flex p-4">
      <div class="shrink-0">
        <svg class="shrink-0 size-4 text-teal-500 mt-0.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"></path>
        </svg>
      </div>
      <div class="ms-3">
        <p id="hs-toast-success-example-label" class="text-sm text-gray-700 dark:text-neutral-400">
          Added to the cart.
        </p>
      </div>
    </div>
  </div>`;

        mainContent.insertAdjacentHTML('beforeend', toastContainer);

        // Get the last toast element and remove it after 3 seconds
        let toastElements = mainContent.querySelectorAll('.toast');
        let lastToast = toastElements[toastElements.length - 1];
        setTimeout(function () {
            if (lastToast && lastToast.parentNode) {
                lastToast.remove();
            }
        }, 1500);
    });
});