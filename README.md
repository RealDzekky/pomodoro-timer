# Pomodoro-Timer

Simple pomodoro-Timer desktop application. An Easy tool for optimizing your time while working


# Technologies 

### Frontend

<p><a href='https://react.dev/'><img src="https://www.svgrepo.com/show/354259/react.svg" alt='React' width='50'</a></p>
<p><a href='https://tailwindcss.com/'><img src="https://www.svgrepo.com/show/374118/tailwind.svg" alt='tailwindcss' width='50'</a></p>
<p><a href='https://daisyui.com/'><img src="https://raw.githubusercontent.com/saadeghi/daisyui/master/src/docs/static/images/daisyui-logo/favicon-192.png" alt='daisyUI' width='50'</a></p>
<p><a href='https://tauri.app/'><img src="https://icon.icepanel.io/Technology/svg/Tauri.svg" alt='Tauri' width='50'</a></p>

### Backend

<p><a href='https://www.rust-lang.org/'><img src="https://static-00.iconduck.com/assets.00/rust-icon-1024x1023-rhu0ldt3.png" alt='Rust' width='50'</a></p>

# Compability 

## Windows 
Just head to the **Realeases** and download the latest **tauri.exe** file

## Linux 

### System Dependencies

#### Debian

```bash
sudo apt update
sudo apt install libwebkit2gtk-4.0-dev \
    build-essential \
    curl \
    wget \
    file \
    libssl-dev \
    libgtk-3-dev \
    libayatana-appindicator3-dev \
    librsvg2-dev
```

#### Arch

```bash
sudo pacman -Syu
sudo pacman -S --needed \
    webkit2gtk \
    base-devel \
    curl \
    wget \
    file \
    openssl \
    appmenu-gtk-module \
    gtk3 \
    libappindicator-gtk3 \
    librsvg \
    libvips
```


### Install Rust

```bash
curl --proto '=https' --tlsv1.2 https://sh.rustup.rs -sSf | sh
```

### Project Installation

```bash
git clone https://github.com/RealDzekky/pomodoro-timer
cd pomodoro-timer
npm i
```

### Run the project

```bash
npm i tauri dev
```