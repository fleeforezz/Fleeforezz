<!--Header-->
<header>

![header](https://capsule-render.vercel.app/api?type=wave&color=0:76C4FF,100:4FFFDF&height=300&section=header&text=YEET&fontSize=90)

</header>

<!--Greeting-->
<h1 align="center">
    Yo!👋 I'm Nhat, I love <b>Building</b> and <b>Making</b> things colorful 🎨
</h1>

<!--Contact-->
<h3 align="center">
    How to contact me 🤔
    <br><br>
    <a href="https://www.facebook.com/profile.php?id=100091778170480">
        <img src="https://img.shields.io/badge/Facebook-1877F2?style=for-the-badge&logo=facebook&logoColor=white">
    </a>
    <a href="https://www.instagram.com/tmn_nhat/">
        <img src="https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white">
    </a>
    <a href="https://www.linkedin.com/in/nh%E1%BA%ADt-tr%C6%B0%C6%A1ng-420723278/">
        <img src="https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white">
    </a>
</h3>

<!--Stat & Spotify dash-->
<table width="100%">
 <tr>
   <td width="50%">

&nbsp; <br> [![spotify-github-profile](https://spotify-github-profile.vercel.app/api/view?uid=317mmez3p642s7bangddhiopxeua&cover_image=true&theme=novatorem&show_offline=false&background_color=121212&interchange=true&bar_color=8e52ff&bar_color_cover=false)](https://github.com/kittinan/spotify-github-profile)

   </td>
   <td width="50%">

&nbsp; <br> [![Anurag's GitHub stats](https://github-readme-stats.vercel.app/api?username=Fleeforezz&show_icons=true&theme=nightowl)](https://github.com/anuraghazra/github-readme-stats)

   </td>
 </tr>
</table>

<!--Skills-->
<h1> 
    Tools i used to develop 💪 
</h1>

<table width="100%">
    <tr>
        <td align="center" width="15%">
            <img src="https://skillicons.dev/icons?i=html" width="65" height="48" alt="HTML" />
            <br> HTML
        </td>
        <td align="center" width="15%">
            <img src="https://skillicons.dev/icons?i=css" width="65" height="48" alt="css" />
            <br> CSS
        </td>
        <td align="center" width="15%">
            <img src="https://techstack-generator.vercel.app/js-icon.svg" alt="icon" width="65" height="48" />
            <br> JavaScript
        </td>
        <td align="center" width="15%">
            <img src="https://skillicons.dev/icons?i=linux" width="65" height="48" 
            alt="Linux" />
            <br> Linux
        </td>
        <td align="center" width="15%">
            <img src="https://skillicons.dev/icons?i=git" width="65" height="48" alt="Git" />
            <br> Git
        </td>
    </tr>
    <tr width="100%">
        <td algin="center" width="15%">
            <img src="https://techstack-generator.vercel.app/docker-icon.svg" alt="icon" width="65" height="65" />
            <br> Docker
        </td>
        <td algin="center" width="15%">
            <img src="https://techstack-generator.vercel.app/kubernetes-icon.svg" alt="icon" width="65" height="65" />
            <br> Kubernetes
        </td>
        <td algin="center" width="15%">
            <img src="https://techstack-generator.vercel.app/nginx-icon.svg" alt="icon" width="65" height="65" />
            <br> Nginx
        </td>
        <td algin="center" width="15%">
            <img src="https://techstack-generator.vercel.app/java-icon.svg" alt="icon" width="65" height="65" />
            <br> Java
        </td>
        <td algin="center" width="15%">
            <img src="https://techstack-generator.vercel.app/mysql-icon.svg" alt="icon" width="65" height="65" />
            <br> MySQL
        </td>
    </tr>
</table>

<!-- Favorite project -->
<h1>
    Take a look at my favorite projects
</h1>

<table width="100%">
 <tr>
   <td width="50%">

&nbsp; <br> [![Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=fleeforezz&repo=Portfolio&theme=nightowl)](https://github.com/fleeforezz/Portfolio)

   </td>
   <td width="50%">

&nbsp; <br> [![Readme Card](https://github-readme-stats.vercel.app/api/pin/?username=fleeforezz&repo=Contact_page&theme=rose_pine)](https://github.com/fleeforezz/Portfolio)

   </td>
 </tr>
</table>

```mermaid
flowchart TB

%% Color %%
classDef red fill:#FF4747,stroke:#000, stroke-width:2px, color:#000
classDef blue fill:#2374f7, stroke:#000, stroke-width:2px, color:#fff
classDef light-pink fill:#FF76CE, stroke:#000, stroke-width:2px, color:#000
classDef purple fill:#967AFF, stroke:#000, stroke-width:2px, color:#000
classDef orange fill:#FF4F00,stroke:#000, stroke-width:2px, color:#000
classDef green fill:#76FFA4,stroke:#000, stroke-width:2px, color:#000
classDef oral-green fill:#00FFEA,stroke:#000, strock-width:2px, color:#000

%% Network Layer &&
RO[/Router\]:::red <===> SW1[[Switch]]:::oral-green
RO <===> SW2[[Switch]]:::oral-green

%% Nodes Layer %%
SW1 ---> |2 Cable| PR[(Proxmox)]:::orange
SW2 ----> SU[(Sutor)]:::blue

%% Proxmox VM and LXC and Services Layer %%
%% VM and LXC %%
PR --- |LXC| BI(Bitwarden):::orange
PR --- |LXC| AN(Ansible):::orange
PR --- |VM| KR{Krator}:::purple
PR --- |LXC| FA(Factorio):::orange
PR --- |LXC| NG(Nginx proxy manager):::orange
%% Services %%
%% Krator %%
KR ---- CO1(Cockpit):::purple
CO1 ---- |2T Raid2| useStorage["`
	NextCloud
	Jellyfin
	Navidrome
	YoutubeDL
	Qbittorrent
`"]:::purple

KR --- |Monitor| monitor["`
	Grafana
	Prometheus
	InfluxDB
`"]:::purple
monitor <-..-> PRO

KR ---- Other["`
	Cockpit
	Portainer
	Pi-hole
	Uptime Kuma
`"]:::purple

KR ---- Projects["`
	Porfolio
	Fleeforezz
	Contact Page
`"]:::purple
%% Factorio %%
FA ---- CO3(Cockpit)
CO3 ---- SY(Syncthing)

%% Sutor Backup and Services Layer %%
%% Services %%
SU ---- PO2(Portainer):::light-pink
SU ---- PI2(Pi-hole):::light-pink
SU ---- PRO(Prometheus):::light-pink
SU ---- CO2{Cockpit}:::green
SU ---- UP2(Uptime Kuma):::light-pink
%% Backup %%
CO2 ---- |1T+320G| useBackup["`
	NextCloud
	Jellyfin
	Navidrome
	YoutubeDL
	Qbittorrent
`"]:::green
useStorage <-..-> |Backup| useBackup
```


