import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    await prisma.user.upsert({
        where: {
            email: 'dadu.pires@gmail.com'
        },
        create: {
            name: 'Eduardo Pires',
            email: 'dadu.pires@gmail.com',
            password: '123456',
            admin: true,
        },
        update: {}
    })

    await prisma.product.upsert({
        where: { id: 1, },
        update: {},
        create: {
            name: 'Jackson',
            description: 'Bela Guitarra',
            price: 10.000,
            imageUrl: 'data:image/webp;base64,UklGRqwFAABXRUJQVlA4IKAFAADQHgCdASqFAIUAPj0cjESiIaERyOTIIAPEtLdunGPts8Ln8A6Wz/Y5Nyot4S+OLyH7KceCIv2V/fvLzv/2vf8Zvs2S/9P3Svox8xHogf5D1W79j6V/sPYA/kf9E/4f9w9e76I9DH0x/yfcJ/mX9Y/3/rFewr0Vf2kG521GUgRoOPq/dV3zHmg/bLAAGShcrZFgulQorc7/lDDLmM8UXTAYu5VO+i9n3+mUqn+cpQsKCzTuIkX9RLeI9Sjw+8/BTERciCu1wKhewUIQLhe2bJFDLV05Jl2Or9Q0NgcgR/RL33uCMtDxGlkIZAttf3HcvQLIrjT75Bb/oRN0UBmtUIAA/v4kemgY87p+A27v3Q+SMP+Jj5FeFfR7Yjad3+hO5mRQfpks52F0r/FvHhej4yx//+sE/uBvRvJvKcsTsmfXeXAh0pwBMmzwC6jePxxkt8DRvMtO/hfAtFkvY1EMZAN0bgEXGTx/s7tA6qEXOUEac0lrDJDVXDSq9Qe++CUFOIDgsW/ixEZkxv97sy/OUUZSpRQNryb5GGIiNRRAtZeMw33g35cJVaBzVJSWE0Byz92576B2tZ86HMi3QqCU536w7Tb3Cnpv6gir6pHUhlt91dGtLPWW5d91OTky3l8g5yS1dIGWxFYWzGm/ac5Jb9I8IDij+mOvRP36V8Jk5MSwohZRyltNzv984AIeMrQ8Ykk+pyi2t5qCtUcd5/NHdM4y9v4Wqdk/8zNsI3B4RyZ64dNAC+a4g6jPr/voiPD9bYWv4ziaCSkQT5o6gI3XpVhQp0amxnfMOR5J/EF3ArArtyqxn4PHVWUU8XqRpXQBgKgFqKy57cETi5PLnFnBMejatJutVe0OVDZ83RozZBbRkmTsJsdaGgxKymz+GEtV8FX6Kxr3TOTUv5hauU8of/o4+aF/IE84Q8INX9QR1DlOtRx8h4tYxc1kPdsSR/+tm78QN3wfJWxHYchVHcJ35fpkkktppzyQpUmkbB7x/Ej4jxAfdiaGBGfGAXnr2ofWB80g3nDFMqiUfHEkglFwLlPJe3P9JvgFkOLI/6nJDLMJtZo9SzOxBER7dj+9KY2L2Wm+6f4rWH2ejJIPgdsJfsVKczmycK7iLueOP4iML0Sb+4VOYEln/CWcL/vwxR9i4xK8POIi/Q8Fnh8/SbVAhHAAWI/kWLoyHIkPYgLZHbWQgDpzPb/Z8MJBdGCnzeFuS6n5ANrr63aPcpiP5OYNLdO7owQVAxm085/uQX6f/0XTiWfAgK/ZlluPKZYdWca2dKXynvpbPNAj7hMgW+H2v91TcqH9tZ/8RM2KsDa7HgVE23waVTa2yWxIaEH+KpfH6aI4ekn7f+DMmo9Ox5ZXN6BqrmO99gi6bs0mVB4lv/jfZmZfv9PfvovIsREyfQ8cjto7vRsmbnaV8ZxGyH22+nsM6kql1ai+wLk+UTob8Lk7RnFDeH/ec0k/qn2cL+ycxGDkabdFVF7gUxDlCpy9+7cdvXe5d7SPP5W87Jzr8qSrx2BMMI7449DlPRN4ixxsqOfYxeEIHeRFTQxYepKB8pKy5mR+lKLsu8f867Mvv8xknX3VgXFXlLTXD+tXzIBTNBS3DR0RqagcC7bxUVfxa5etKexylzfa76BGlMVlACsC/GXQhTsMPbzhPzOSUv8Oc3RYO+s064u6s06lff+ffRl3VrTkWzo9eCTIF38g5pytwHSqz1FMSJQKKRZAbkLjdqYWgLvqflgNiri/q24ujthziP2iWGOCoLzKgvfG7s9Tflh7snExPJJVLPiwRfkkoRyi2CgsDPA8ZkG5+hMzNJyJ+Xdg8BRbZRGtx8twWJ+bN754M1xPVwGzjs1mpKHr1J5fgxPZoK/B8tqeSm6w0Suh//dcQxLzmn/iaAI54Pch9TrDf05Nx61+YQKwBAAAAAA='
        }
    })
}

main().then(async () => {
    await prisma.$disconnect()
}).catch(async (e) => {
    console.log(e)
    await prisma.$disconnect()
    process.exit()
})