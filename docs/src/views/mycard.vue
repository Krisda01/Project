<template>
    <div class="product-card">
        <div class="product-badge">Premium</div>
        <div class="product-tilt-effect">
            <div class="product-image">
                <img :src="coverimage" :alt="name">
            </div>
        </div>
        <div class="product-info">
            <h2 class="product-title">{{name}}</h2>
            <div class="product-description">
                <p>{{ detail }}</p>
            </div>
            <div class="product-features">
                <span class="feature">Car</span>
                <span class="feature">Toyota</span>
            </div>
            <div class="product-bottom">
                <div class="price">
                    <h4>{{ price }}</h4>
                </div>
                <router-link :to="`../products/${id}`" style="text-decoration: none;">
                    <button class="product-button">
                            <span class="button-text">View Details</span>
                        <svg class="button-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <path d="M16 10a4 4 0 0 1-8 0"></path>
                        </svg>
                    </button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import router from '@/router';

export default{
    name: "mycard",
    props: {
        id: {
            type:[String,Number],
            required:true,
        },
        name: {
            type: String,
            required:true,
        },
        detail: {
            type:String,
            required:"",
        },
        coverimage: {
            type:String,
            required:true,
        },
        price: {
            type:[String,Number],
            required:true,
        },
    },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Chakra+Petch:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Kanit:wght@900&display=swap');
*{
    font-family: "Chakra Petch", sans-serif;
    font-weight: 700;
    font-style: normal;
}
.product-card {
    width: 360px;
    position: relative;
    background: white;
    border-radius: 20px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
    overflow: hidden;
    transition: transform 0.4s ease, box-shadow 0.4s ease;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    margin: 30px auto;
}

.product-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
}

.product-badge {
    position: absolute;
    top: 15px;
    right: 15px;
    background: linear-gradient(45deg, #fbff18, #7e800e);
    color: white;
    padding: 6px 12px;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    border-radius: 12px;
    z-index: 10;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.product-tilt-effect {
    overflow: hidden;
    transform-style: preserve-3d;
    perspective: 1000px;
}

.product-image {
    height: 240px;
    overflow: hidden;
    position: relative;
}

.product-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.8s cubic-bezier(0.19, 1, 0.22, 1);
}

.product-card:hover .product-image img {
    transform: scale(1.05);
}

.product-info {
    padding: 25px;
    position: relative;
}

.product-category {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    color: #71717A;
    margin-bottom: 8px;
}

.product-title {
    font-size: 20px;
    font-weight: 700;
    color: #18181B;
    margin: 0 0 12px 0;
    letter-spacing: -0.5px;
    line-height: 1.2;
}

.product-description p {
    font-size: 14px;
    color: #52525B;
    line-height: 1.5;
    margin-bottom: 15px;
}

.product-features {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-bottom: 20px;
}

.feature {
    font-size: 11px;
    background-color: #F4F4F5;
    color: #71717A;
    padding: 4px 10px;
    border-radius: 12px;
    font-weight: 500;
}

.product-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
}

.product-button {
    background: linear-gradient(45deg, #18181B, #27272A);
    color: white;
    border: none;
    border-radius: 12px;
    padding: 10px 18px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: 8px;
    transition: all 0.3s ease;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    position: relative;
    overflow: hidden;
}

.product-button::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    transition: all 0.6s ease;
}

.product-button:hover {
    background: linear-gradient(45deg, #27272A, #3F3F46);
    transform: translateY(-3px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
}

.product-button:hover::before {
    left: 100%;
}

.button-icon {
    transition: transform 0.3s ease;
}

.product-button:hover .button-icon {
    transform: rotate(-10deg) scale(1.1);
}
</style>