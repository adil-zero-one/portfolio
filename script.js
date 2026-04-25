 const modal = document.getElementById("doc-modal");
    const frame = document.getElementById("doc-frame");
    const closeBtn = document.querySelector(".close-btn");

    function openDoc(path) {
      frame.src = path;
      modal.style.display = "flex";
    }

    closeBtn.onclick = () => modal.style.display = "none";
    window.onclick = e => { if (e.target === modal) modal.style.display = "none"; };