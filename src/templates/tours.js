import React from 'react'
import { RouteData, Link } from 'react-static'
//

export default () => (
    <RouteData
        render={({ tours }) => (
            <div>
                <h1>All Tours</h1>
                { console.log(tours) }
                <ul>
                    {/* {posts.map(post => (
                        <li key={post.id}>
                            <Link to={`/blog/post/${post.id}/`}>{post.title}</Link>
                        </li>
                    ))} */}
                </ul>
            </div>
        )}
    />
)
