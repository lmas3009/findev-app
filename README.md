# Findev-app: A place to find/connect developers

A place to find/connect developers

![screen1](https://user-images.githubusercontent.com/60876387/185550923-a52322d2-4522-4577-a1cd-a970a4cd7d24.png)
![screen2](https://user-images.githubusercontent.com/60876387/185550968-916f6fc8-b86d-4cfd-add5-1e8dacce4af1.png)
![screen3](https://user-images.githubusercontent.com/60876387/185550978-edf6cac0-6c86-4d75-8abd-162602f078e8.png)
![screen4](https://user-images.githubusercontent.com/60876387/185550947-15c4bfa6-06dd-4dc8-b1ff-e52c0add16b0.png)


# Overview video

Here's a short video that explains the project.

[![findev-app](https://user-images.githubusercontent.com/60876387/185554419-c53dfcb9-227e-4416-92a0-50c8f4118924.png)](https://youtu.be/QKZ2wWE68e8)



## Tech Stack

It is a ~~MERN~~ RERN Stack project

R - Redis

E - Express Js

R - React Js

N - Node Js

For styling i used Tailwind CSS

## How it works

### How the data is stored:

**UserData**

  UserData are strored as hashtable format
  
  UserData has
   - Username
   - Email
   - Id
   - ImageUrl

**Skills**

  Skills are stored as list 
  
**Country**

  Country is stored in hashtable with value and label
  
**Developers**

  Developers are stored in list format with the value as userId

## How to run it locally?

### Prerequisites

✅ You need to have nodejs
✅ You need to have an account in redis and installed redisinsigts

### Local installation

To work on this application follow bellow:

```
git clone https://github.com/lmas3009/findev-app.git
```

Make changes in the application

```
git add .
```

Commit the changes

```
git commit -m "<Changes>"
```

Create a new branch and checkout

```
git branch <name>

git checkout <name>
```

push to git

```
git push -u origin <name>
```



## Deployment

To make deploys work, you need to create free account on [Redis Cloud](https://redis.info/try-free-dev-to)

### Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fvercel%2Fnext.js%2Ftree%2Fcanary%2Fexamples%2Fhello-world)

## More Information about Redis Stack

Here some resources to help you quickly get started using Redis Stack. If you still have questions, feel free to ask them in the [Redis Discord](https://discord.gg/redis) or on [Twitter](https://twitter.com/redisinc).

### Getting Started

1. Sign up for a [free Redis Cloud account using this link](https://redis.info/try-free-dev-to) and use the [Redis Stack database in the cloud](https://developer.redis.com/create/rediscloud).
1. Based on the language/framework you want to use, you will find the following client libraries:
    - [Redis OM .NET (C#)](https://github.com/redis/redis-om-dotnet)
        - Watch this [getting started video](https://www.youtube.com/watch?v=ZHPXKrJCYNA)
        - Follow this [getting started guide](https://redis.io/docs/stack/get-started/tutorials/stack-dotnet/)
    - [Redis OM Node (JS)](https://github.com/redis/redis-om-node)
        - Watch this [getting started video](https://www.youtube.com/watch?v=KUfufrwpBkM)
        - Follow this [getting started guide](https://redis.io/docs/stack/get-started/tutorials/stack-node/)
    - [Redis OM Python](https://github.com/redis/redis-om-python)
        - Watch this [getting started video](https://www.youtube.com/watch?v=PPT1FElAS84)
        - Follow this [getting started guide](https://redis.io/docs/stack/get-started/tutorials/stack-python/)
    - [Redis OM Spring (Java)](https://github.com/redis/redis-om-spring)
        - Watch this [getting started video](https://www.youtube.com/watch?v=YhQX8pHy3hk)
        - Follow this [getting started guide](https://redis.io/docs/stack/get-started/tutorials/stack-spring/)

The above videos and guides should be enough to get you started in your desired language/framework. From there you can expand and develop your app. Use the resources below to help guide you further:

1. [Developer Hub](https://redis.info/devhub) - The main developer page for Redis, where you can find information on building using Redis with sample projects, guides, and tutorials.
1. [Redis Stack getting started page](https://redis.io/docs/stack/) - Lists all the Redis Stack features. From there you can find relevant docs and tutorials for all the capabilities of Redis Stack.
1. [Redis Rediscover](https://redis.com/rediscover/) - Provides use-cases for Redis as well as real-world examples and educational material
1. [RedisInsight - Desktop GUI tool](https://redis.info/redisinsight) - Use this to connect to Redis to visually see the data. It also has a CLI inside it that lets you send Redis CLI commands. It also has a profiler so you can see commands that are run on your Redis instance in real-time
1. Youtube Videos
    - [Official Redis Youtube channel](https://redis.info/youtube)
    - [Redis Stack videos](https://www.youtube.com/watch?v=LaiQFZ5bXaM&list=PL83Wfqi-zYZFIQyTMUU6X7rPW2kVV-Ppb) - Help you get started modeling data, using Redis OM, and exploring Redis Stack
    - [Redis Stack Real-Time Stock App](https://www.youtube.com/watch?v=mUNFvyrsl8Q) from Ahmad Bazzi
    - [Build a Fullstack Next.js app](https://www.youtube.com/watch?v=DOIWQddRD5M) with Fireship.io
    - [Microservices with Redis Course](https://www.youtube.com/watch?v=Cy9fAvsXGZA) by Scalable Scripts on freeCodeCamp
