// 1. Base de Datos de Productos
const productos = [
    { id: 1, cat: "Frutas deshidratadas", nombre: "Arandanos", img: "frutas_deshidratadas_001.jpg", desc: "Pequeños frutos rojos deshidratados con el equilibrio justo entre dulzor y acidez. Ideales para snacks saludables o repostería.", tags: ["Antioxidante", "Superfood", "Sin azúcar agregada", "Vitaminas", "Snack saludable"], precios: { "500g": 7000, "1kg": 12000, "1kg (mayorista)": 11500, "Bulto (mayorista)": 124350 } },
    { id: 2, cat: "Frutas deshidratadas", nombre: "Pasas Morenas Flame", img: "frutas_deshidratadas_002.jpg", desc: "Pasas de uva carnosas y dulces, seleccionadas por su tamaño premium. Aportan energía natural inmediata para tus actividades diarias.", tags: ["Energia natural", "Fibra", "Dulzor natural", "Sin semillas", "Premium"], precios: { "500g": 4500, "1kg": 6000, "1kg (mayorista)": 5900, "Bulto (mayorista)": 55830 } },
    

    { id: 4, cat: "Granolas", nombre: "Granola con pasas", img: "granolas_001.jpg", desc: "Mezcla crocante de avena horneada con miel, frutos secos y el toque dulce de las pasas flame. El desayuno completo para arrancar el día.\nIngredientes: Avena, coco fino, quinoa inflada, copos de maíz, aceite de coco, miel, pasas.", tags: ["Desayuno completo", "Fibra activa", "Crocante", "Endulzado con miel", "Energía duradera"], precios: { "500g": 4000, "1kg": 6000, "1kg (mayorista)": 5780, "Bulto (mayorista)": 27255 } },
    { id: 5, cat: "Granolas", nombre: "Granola sin pasas", img: "granolas_002.jpg", desc: "Base de cereales y frutos secos horneados para quienes prefieren un sabor más neutro y puramente crocante. Perfecta para combinar con yogur y frutas frescas.\nIngredientes: Avena, coco fino, quinoa inflada, copos de maíz, aceite de coco, miel", tags: ["Solo crocante", "Bajo dulzor", "Avena gourmet", "Mix semillas", "Saludable", "Sin fruta deshidratada"], precios: { "500g": 4500, "1kg": 5600, "1kg (mayorista)": 5400, "Bulto (mayorista)": 25350 } },

    { id: 6, cat: "Mixes", nombre: "Mix frutal", img: "mixes_001.jpg", desc: "Ingredientes: Kiwi en rodaja, nuez mariposa light, ananá en rodaja, chips de banana entera, papaya para mix, pasas de uva rubias económicas, pasas de uva morena flame.", tags: [], precios: { "500g": 9000, "1kg": 15000, "1kg (mayorista)": 8000, "Bulto (mayorista)": 54000 } },
    { id: 7, cat: "Mixes", nombre: "Mix tropical", img: "mixes_002.jpg", desc: "Ingredientes: Almendras enteras con partida, nuez mariposa light, chips de banana entera, papaya para mix, maní sin sal, pasas de uva morena flame.", tags: [], precios: { "500g": 4500, "1kg": 10000, "1kg (mayorista)": 7900, "Bulto (mayorista)": 36570 } },
    { id: 8, cat: "Mixes", nombre: "Mix clasico", img: "mixes_003.jpg", desc: "Ingredientes: Almendras enteras con partida, nuez mariposa light, pasas de uva rubias económicas, pasas de uva morena flame, maní sin sal.", tags: [], precios: { "500g": 8000, "1kg": 12400, "1kg (mayorista)": 7400, "Bulto (mayorista)": 38100 } },
    { id: 9, cat: "Mixes", nombre: "Mix europeo", img: "mixes_004.jpg", desc: "Ingredientes: Almendras enteras con partida, nuez mariposa light, pasas de uva rubias económicas, pasas de uva morena flame, castañas de cajú enteras W4 – Vietnam, avellanas medianas importadas.", tags: [], precios: { "500g": 6100, "1kg": 10900, "1kg (mayorista)": 11380, "Bulto (mayorista)": 52100 } },
    { id: 10, cat: "Mixes", nombre: "Mix cervecero", img: "mixes_005.jpg", desc: "Ingredientes: Maní tostado con sal tipo Virginia y maíz frito salado.", tags: [], precios: { "500g": 6300, "1kg": 11200, "1kg (mayorista)": 6400, "Bulto (mayorista)": 32545 } },
    { id: 11, cat: "Mixes", nombre: "Mix sin pasas", img: "mixes_006.jpg", desc: "Ingredientes: Almendras enteras con partida, nuez mariposa light, avellanas medianas importadas, castañas de cajú enteras W4 – Vietnam, maní sin sal", tags: [], precios: { "500g": 7000, "1kg": 12000, "1kg (mayorista)": 12000, "Bulto (mayorista)": 61730 } },

    { id: 12, cat: "Frutos secos", nombre: "Nuez mariposa extra light", img: "frutos_secos_007.jpg", desc: "Mitades de nueces seleccionadas de color claro y sabor suave. Frescura garantizada en cada bocado, ideales para cuidar tu salud cardiovascular.", tags: ["Omega 3", "Salud corazón", "Premium light", "Cerebro sano", "Proteína vegetal"], precios: { "500g": 16000, "1kg": 22000, "1kg (mayorista)": 16900, "Bulto (mayorista)": 157180} },
    { id: 13, cat: "Frutos secos", nombre: "Almendra guara", img: "frutos_secos_002.jpg", desc: "Variedad de almendra nacional de cáscara dura y sabor intenso. Destaca por su crocantez única y su alto contenido de calcio.", tags: ["Producción nacional", "Crocante", "Calcio", "Vitamina E", "Keto friendly"], precios: { "500g": 14000, "1kg": 20000, "1kg (mayorista)": 16300, "Bulto (mayorista)": 151300 } },
    { id: 14, cat: "Frutos secos", nombre: "Almendra non pareil", img: "frutos_secos_003.jpg", desc: "La reina de las almendras por su piel fina y forma alargada. De sabor dulce y delicado, es la opción favorita para consumo directo y leche vegetal.", tags: ["Calidad extra", "Sabor suave", "Grasas saludables", "Snack gourmet", "Sin piel gruesa"], precios: { "500g": 17000, "1kg": 24000, "1kg (mayorista)": 18200, "Bulto (mayorista)": 168400 } },
    { id: 15, cat: "Frutos secos", nombre: "Pistachos", img: "frutos_secos_004.jpg", desc: "Pistachos tostados en su punto justo, con ese color verde vibrante que indica máxima frescura. Un clásico infaltable para picadas saludables.", tags: ["Tostados", "Minerales", "Verde Premium", "Bajo en calorías", "Proteína", "Aperitivo sano"], precios: { "500g": 23000, "1kg": 40000, "1kg (mayorista)": 30000, "Bulto (mayorista)": 286500 } },
    { id: 16, cat: "Frutos secos", nombre: "Castaña de Caju", img: "frutos_secos_005.jpg", desc: "De textura cremosa y sabor mantecoso. Son perfectas para realizar quesos veganos o simplemente disfrutar como un snack nutritivo.", tags: ["Cremosas", "Vegano", "Magnesio", "Sin sal", "Minerales esenciales", "Gourmet"], precios: { "500g": 12000, "1kg": 18000, "1kg (mayorista)": 15400, "Bulto (mayorista)": 294000 } },
    { id: 17, cat: "Frutos secos", nombre: "Mani sin sal", img: "frutos_secos_006.jpg", desc: "Maní tostado artesanalmente para resaltar su sabor natural. Una fuente económica y potente de energía y proteínas para deportistas.", tags: ["Tostado natural", "Proteína económica", "Deportistas", "Sin sodio", "Energía pura"], precios: { "500g": 1900, "1kg": 2500, "1kg (mayorista)": 2000, "Bulto (mayorista)": 52275 } },
    { id: 3, cat: "Frutos secos", nombre: "Datiles", img: "frutas_deshidratadas_003.jpg", desc: "Frutos dulces de textura suave y melosa. El reemplazo perfecto y natural para el azúcar refinado en tus recetas de cocina saludable.", tags: ["Caramelo natural", "Hierro", "Postre sano", "Sin gluten", "Potasio", "Energético"], precios: { "500g": 4600, "1kg": 7000, "1kg (mayorista)": 6850, "Bulto (mayorista)": 33000 } }
    // Agregar el resto siguiendo este formato...
];

let carrito = [];
let productoActual = null;

// 2. Elementos del DOM
const thumbGrid = document.getElementById('thumbnails-grid');
const mainImg = document.getElementById('main-img');
const prodName = document.getElementById('prod-name');
const prodDesc = document.getElementById('prod-desc');
const prodTags = document.getElementById('prod-tags');
const sizeSelector = document.getElementById('size-selector');
const cartIconContainer = document.getElementById('cart-icon-container');

// 3. Función para cambiar categoría
function filtrarPorCategoria(cat) {
    const filtrados = productos.filter(p => p.cat === cat);
    thumbGrid.innerHTML = '';
    filtrados.forEach(p => {
        const img = document.createElement('img');
        img.src = `imagenes/${p.img}`;
        img.className = 'thumb-item';
        img.onclick = () => mostrarProducto(p);
        thumbGrid.appendChild(img);
    });
    if(filtrados.length > 0) mostrarProducto(filtrados[0]);
}

// 4. Mostrar Producto en el Carrusel
function mostrarProducto(p) {
    productoActual = p;
    mainImg.src = `imagenes/${p.img}`;
    prodName.innerText = p.nombre;
    prodDesc.innerText = p.desc;
    
    // Tags
    prodTags.innerHTML = p.tags.map(t => `<span class="tag">${t}</span>`).join('');
    
    // Selector de tamaños
    sizeSelector.innerHTML = Object.entries(p.precios)
        .map(([size, price]) => `<option value="${size}">${size} — $${price}</option>`).join('');
}

// 5. Lógica del Carrito
document.getElementById('add-to-cart').onclick = () => {
    const size = sizeSelector.value;
    const precio = productoActual.precios[size];
    
    const itemEnCarrito = carrito.find(i => i.id === productoActual.id && i.size === size);
    if(itemEnCarrito) {
        itemEnCarrito.qty++;
    } else {
        carrito.push({ ...productoActual, size, precio, qty: 1 });
    }
    actualizarInterfazCarrito();
};

function actualizarInterfazCarrito() {
    // 1. Actualizar el contador del icono flotante
    const count = carrito.reduce((acc, item) => acc + item.qty, 0);
    const cartCountElement = document.getElementById('cart-count');
    const cartIconContainer = document.getElementById('cart-icon-container');
    
    if (cartCountElement) {
        cartCountElement.innerText = count;
    }
    
    // Mostrar u ocultar el icono según si hay productos
    if (cartIconContainer) {
        cartIconContainer.className = count > 0 ? '' : 'cart-hidden';
    }
    
    // 2. Generar la lista de productos con el nuevo diseño
    const list = document.getElementById('cart-items-list');
    if (list) {
        if (carrito.length === 0) {
            list.innerHTML = `<p style="text-align:center; color:#888; margin-top:20px;">Tu carrito está vacío</p>`;
        } else {
            list.innerHTML = carrito.map((item, index) => `
                <div class="cart-item">
                    <div class="cart-item-info">
                        <strong>${item.nombre}</strong>
                        <small>${item.size} — $${item.precio.toLocaleString()} c/u</small>
                    </div>
                    <div class="cart-item-controls">
                        <span class="price-tag">$${(item.precio * item.qty).toLocaleString()}</span>
                        <div style="display: flex; align-items: center; justify-content: flex-end; gap: 10px;">
                            <button class="qty-btn" onclick="cambiarCant(${index}, -1)">-</button>
                            <span>${item.qty}</span>
                            <button class="qty-btn" onclick="cambiarCant(${index}, 1)">+</button>
                        </div>
                    </div>
                </div>
            `).join('');
        }
    }
    
    // 3. Calcular y mostrar el total con formato
    const total = carrito.reduce((acc, item) => acc + (item.precio * item.qty), 0);
    const totalElement = document.getElementById('cart-total');
    
    if (totalElement) {
        // Si usaste la estructura de "Total: $18500", esto lo actualiza con estilo
        totalElement.innerHTML = `
            <div class="total-container">
                <span class="total-label">Total del pedido:</span>
                <span class="total-price">$${total.toLocaleString()}</span>
            </div>
        `;
    }
}

// Función de cambio de cantidad por si acaso:
window.cambiarCant = (index, delta) => {
    carrito[index].qty += delta;
    
    // Si la cantidad llega a 0, eliminamos el producto del array
    if (carrito[index].qty <= 0) {
        carrito.splice(index, 1);
    }
    
    actualizarInterfazCarrito();
};

window.cambiarCant = (index, delta) => {
    carrito[index].qty += delta;
    if(carrito[index].qty <= 0) carrito.splice(index, 1);
    actualizarInterfazCarrito();
};

document.getElementById('clear-cart').onclick = () => {
    carrito = [];
    actualizarInterfazCarrito();
    document.getElementById('cart-modal').style.display = 'none';
};

// 6. WhatsApp
document.getElementById('whatsapp-order').onclick = () => {
    const totalPedido = carrito.reduce((acc, item) => acc + (item.precio * item.qty), 0); 

    let msg = "Hola Aymara! Quisiera realizar este pedido:%0A";
    carrito.forEach(i => {
        msg += `- x${i.qty} ${i.nombre} (${i.size}) | $${(i.precio * i.qty).toLocaleString()}`;
    });

    msg += "%0A-----------------------------------------------%0A";
    msg += `*Total del pedido: $${totalPedido.toLocaleString()}*`;
    window.open(`https://api.whatsapp.com/send?phone=5493517677205&text=${msg}`);
};

// Eventos de Categoría
document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.onclick = (e) => {
        document.querySelector('.cat-btn.active').classList.remove('active');
        e.target.classList.add('active');
        filtrarPorCategoria(e.target.dataset.category);
    };
});

// Modal abrir/cerrar
document.getElementById('open-cart').onclick = () => document.getElementById('cart-modal').style.display = 'block';
document.getElementById('close-cart').onclick = () => document.getElementById('cart-modal').style.display = 'none';

// Inicio
filtrarPorCategoria("Frutos secos");