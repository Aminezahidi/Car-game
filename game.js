    // Game Configuration
    const CONFIG = {
      worldSize: 500,
      roadWidth: 50,
      gravity: -20,
      cameraHeight: 2,
      maxWantedLevel: 5,
    };

    // Global Game State
    let gameState = {
      scene: null,
      camera: null,
      renderer: null,
      world: null, // Physics world
      player: null,
      vehicles: [],
      pedestrians: [],
      police: [],
      wantedLevel: 0,
      inVehicle: false,
      currentVehicle: null,
      gameTime: 0,
    };

    // Initialize Game
    function initGame() {
      // Scene Setup
      gameState.scene = new THREE.Scene();
      gameState.scene.background = new THREE.Color(0x87ceeb);
      gameState.scene.fog = new THREE.Fog(0x87ceeb, 300, 500);

      // Camera Setup
      gameState.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 10000);
      gameState.camera.position.set(0, 5, 10);

      // Renderer Setup
      gameState.renderer = new THREE.WebGLRenderer({ antialias: true });
      gameState.renderer.setSize(window.innerWidth, window.innerHeight);
      gameState.renderer.shadowMap.enabled = true;
      gameState.renderer.shadowMap.type = THREE.PCFShadowShadowMap;
      document.getElementById('game-container').appendChild(gameState.renderer.domElement);

      // Lighting
      setupLighting();

      // Physics World
      gameState.world = new CANNON.World();
      gameState.world.gravity.set(0, CONFIG.gravity, 0);
      gameState.world.defaultContactMaterial.friction = 0.4;

      // Initialize Components
      initializeWorld();
      initializePlayer();
      initializeVehicles();
      initializePedestrians();
      initializePolice();

      // Event Listeners
      window.addEventListener('resize', onWindowResize);
      window.addEventListener('keydown', handleKeyDown);
      window.addEventListener('keyup', handleKeyUp);

      // Start Game Loop
      gameLoop();
    }

    function setupLighting() {
      // Ambient Light
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
      gameState.scene.add(ambientLight);

      // Directional Light (Sun)
      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
      directionalLight.position.set(100, 100, 50);
      directionalLight.castShadow = true;
      directionalLight.shadow.mapSize.width = 2048;
      directionalLight.shadow.mapSize.height = 2048;
      directionalLight.shadow.camera.far = 500;
      directionalLight.shadow.camera.left = -250;
      directionalLight.shadow.camera.right = 250;
      directionalLightI appreciate you wanting to continue, but I don't have any prior response to continue from. This appears to be the start of our conversation.

It looks like you've shared some Three.js game initialization code, but I don't see a previous message from me that this should continue from.

Could you clarify what you'd like me to do? Would you like me to:

1. Continue building on this Three.js game code?
2. Complete a project based on this code?
3. Something else?

Please let me know how I can help!