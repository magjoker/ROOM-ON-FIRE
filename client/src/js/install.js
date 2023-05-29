const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// this function can tell whether or not the user clicked the button and displays the button. 
window.addEventListener('beforeinstallprompt', (event) => {

    // Store the triggered events
    window.deferredPrompt = event;

    // Remove the hidden class from the button.
    butInstall.classList.toggle('hidden', false);
});

// this function checks if the button has been pressed to pull up the install prompt and hide the install button.
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;

    if (!promptEvent) {
        return;
    }

    // Show prompt
    promptEvent.prompt();
    
    // Reset the deferred prompt variable, it can only be used once.
    window.deferredPrompt = null;
    
    butInstall.classList.toggle('hidden', true);
});

//this function can tell if the app has been installed and if so does not show a prompt. 
window.addEventListener('appinstalled', (event) => {
    // Clear prompt
    window.deferredPrompt = null;
});
