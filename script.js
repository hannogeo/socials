<<<<<<< HEAD
document.addEventListener('DOMContentLoaded', () => {
    const emailWrapper = document.getElementById('email-copy');
    const tooltip = document.getElementById('tooltip');
    const emailText = "hannogeo.yt@gmail.com";

    if (emailWrapper && tooltip) {
        emailWrapper.addEventListener('click', () => {
            navigator.clipboard.writeText(emailText).then(() => {
                tooltip.textContent = "Copied!";
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });
        });

        emailWrapper.addEventListener('mouseleave', () => {
            tooltip.textContent = "Copy?";
        });
    }
});
=======
document.addEventListener('DOMContentLoaded', () => {
    const emailWrapper = document.getElementById('email-copy');
    const tooltip = document.getElementById('tooltip');
    const emailText = "hannogeo.yt@gmail.com";

    if (emailWrapper && tooltip) {
        emailWrapper.addEventListener('click', () => {
            navigator.clipboard.writeText(emailText).then(() => {
                tooltip.textContent = "Copied!";
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });
        });

        emailWrapper.addEventListener('mouseleave', () => {
            tooltip.textContent = "Copy?";
        });
    }
});
>>>>>>> 8dac233 (.)
