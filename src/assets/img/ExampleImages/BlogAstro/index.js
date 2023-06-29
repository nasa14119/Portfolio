import HeroImage from "./HeroBlogAstro.png"
export const getImagesBlog = async () => {
    const response = Array(12); 
    response[0] = await import("./HeroBlogAstro.png").then((img)=>img.default);
    response[1] = await import("./BlogAstro-1.png").then((img)=>img.default);
    response[2] = await import("./BlogAstro-2.png").then((img)=>img.default);
    response[3] = await import("./BlogAstro-3.png").then((img)=>img.default);
    response[4] = await import("./BlogAstro-4.png").then((img)=>img.default);
    response[5] = await import("./BlogAstro-5.png").then((img)=>img.default);
    response[6] = await import("./BlogAstro-6.png").then((img)=>img.default);
    response[7] = await import("./BlogAstro-7.png").then((img)=>img.default);
    response[8] = await import("./BlogAstro-8.png").then((img)=>img.default);
    response[9] = await import("./BlogAstro-9.png").then((img)=>img.default);
    response[10] = await import("./BlogAstro-10.png").then((img)=>img.default);
    response[11] = await import("./BlogAstro-11.png").then((img)=>img.default);
    return response; 
}

export const HeroBlog = HeroImage; 