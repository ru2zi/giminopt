// 도봉이 옮겨 놓기
// 오늘은 Header만 !


function NavBar() {
  return (
    <header>
      <nav id="header-nav">
          <ul>
              <li><a href="#home">홈</a></li>
              <li><a href="#news">도봉이 근황 보기</a></li>
              <li><a href="#contact">도봉이 만든 사람 소개</a></li>
              <li><a href="#about">도봉이는...</a></li>
          </ul>
      </nav>
    </header>
  );
}

export default NavBar;
