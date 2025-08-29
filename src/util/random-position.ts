export const generateRandomPositions = (count, ballSize = 128) => {
    const positions = [];
    const padding = 5; // Extra spacing in %
  
    while (positions.length < count) {
      // Generate random top/left within safe range
      const top = Math.floor(Math.random() * (100 - padding * 2)) + padding;
      const left = Math.floor(Math.random() * (100 - padding * 2)) + padding;
  
      // Skip near center (35–65% both directions)
      if (top > 35 && top < 65 && left > 35 && left < 65) continue;
  
      // Convert ball size to percentage based on viewport (approx)
      const minDistance = (ballSize / window.innerWidth) * 100 + 3; // +3% buffer
  
      // Ensure no overlap with existing positions
      const isOverlapping = positions.some(pos => {
        const t = parseInt(pos.top);
        const l = parseInt(pos.left);
        return Math.abs(t - top) < minDistance && Math.abs(l - left) < minDistance;
      });
  
      if (!isOverlapping) {
        positions.push({ top: `${top}%`, left: `${left}%` });
      }
    }
  
    return positions.sort(() => Math.random() - 0.5); // Shuffle order
  }  