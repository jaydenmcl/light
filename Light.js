// Custom Light Block in EaglerCraft Zeta 0.02 (Minecraft 1.11)

// Define a custom Light Block
const lightBlock = {
    // Unique ID for the block
    id: 'custom:light_block',
    
    // Display name of the block
    name: 'Light Block',
    
    // Invisible texture (or use a texture you want to assign, e.g., "invisible" or a blank texture)
    texture: 'invisible',  // You can define a custom texture or use 'invisible' for no visual texture.
    
    // Block properties
    isSolid: false,         // Make it non-solid (it won't obstruct movement)
    interactable: false,    // Make it non-interactive (players can't right-click on it)
    
    // Define the light level emitted by this block
    lightLevel: 15,         // Maximum light level (similar to glowstone or sea lantern)
    
    // Optional: Adding behavior when placed in the world
    onPlace: function (player, x, y, z) {
        // You can add custom behaviors here when the block is placed.
        console.log(`Light Block placed at (${x}, ${y}, ${z}) by player ${player.name}`);
    },
};

// Register the custom block with EaglerCraft
function registerLightBlock() {
    // Assuming EaglerCraft has a function to register custom blocks
    if (typeof EaglerCraft !== 'undefined' && EaglerCraft.registerBlock) {
        EaglerCraft.registerBlock(lightBlock);
        console.log('Light Block registered successfully!');
    } else {
        console.log('Error: EaglerCraft environment is not defined.');
    }
}

// Call the function to register the light block
registerLightBlock();
