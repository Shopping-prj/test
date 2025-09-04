import React from 'react'
import AdminLayout from '../include/AdminLayout'

const NoticeList = () => {
  return (
    <>
        {/* 게시판 메인 시작 */}
        <div className="board-container">
          <h3>QnA게시판</h3>
          <AdminLayout />
          <div className="board-buttons">
            <button>검색</button>
            <button>글쓰기</button>
          </div>

          <table className="board-table">
            <thead>
              <tr>
                <th>번호</th>
                <th></th>
                <th>제목</th>
                <th>글쓴이</th>
                <th>날짜</th>
                <th>조회</th>
                <th>추천</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Num</td>
                <td><input type="checkbox" /></td>
                <td>테스트 1</td>
                <td>userName</td>
                <td>Date</td>
                <td>Views</td>
                <td>0</td>
              </tr>
              {/* 나중에 map 돌려서 동적 처리하면 됨 */}
            </tbody>
          </table>

          <div className="footer-buttons">
            <div>
              <button>선택삭제</button>
              <button>선택복사</button>
              <button>선택이동</button>
            </div>
            <button>글쓰기</button>
          </div>

          <div className="pagination">
            <span>처음</span>
            <span className="current">1</span>
            <a href="#">2</a>
            <a href="#">3</a>
            <a href="#">4</a>
            <span>맨끝</span>
          </div>
        </div>
        {/* 게시판 메인 끝 */}
    </>
  )
}

export default NoticeList