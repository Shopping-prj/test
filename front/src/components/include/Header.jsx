import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = ({ onLogout, isLoggedIn }) => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">쇼핑몰</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/member" className="nav-link">회원관리</Link>
            <Link to="/category" className="nav-link">카테고리관리</Link>
            <Link to="/product" className="nav-link">상품관리</Link>
            <Link to="/order" className="nav-link">주문관리</Link>
            <Link to="/stats" className="nav-link">통계분석(미구현)</Link>
            <Link to="/notice" className="nav-link">QnA게시판관리</Link>
            <Link to="/setting" className="nav-link">환경설정</Link>
            {!isLoggedIn && <Link to="/login" className="nav-link">로그인</Link>}
          </Nav>
          {isLoggedIn && (
            <Button className="btn btn-danger" onClick={onLogout}>로그아웃</Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header