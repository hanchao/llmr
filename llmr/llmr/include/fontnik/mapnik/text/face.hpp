/*****************************************************************************
 *
 * This file is part of Mapnik (c++ mapping toolkit)
 *
 * Copyright (C) 2013 Artem Pavlenko
 *
 * This library is free software; you can redistribute it and/or
 * modify it under the terms of the GNU Lesser General Public
 * License as published by the Free Software Foundation; either
 * version 2.1 of the License, or (at your option) any later version.
 *
 * This library is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this library; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
 *
 *****************************************************************************/
#ifndef MAPNIK_FACE_HPP
#define MAPNIK_FACE_HPP

//mapnik
#include <fontnik/mapnik/text/glyph_info.hpp>
#include <fontnik/mapnik/config.hpp>
#include <fontnik/mapnik/noncopyable.hpp>

// fontnik
#include <fontnik/fontnik/guarded_map.hpp>

// freetype2
extern "C"
{
#include <ft2build.h>
#include FT_FREETYPE_H
}

//stl
#include <memory>
#include <string>
#include <vector>

namespace mapnik
{

typedef fontnik::guarded_map<glyph_index_t, glyph_info> glyph_cache_type;
typedef std::shared_ptr<glyph_cache_type> glyph_cache_ptr;

class font_face : mapnik::noncopyable
{
public:
    font_face(FT_Face face);
    font_face(FT_Face face, glyph_cache_ptr glyphs);

    std::string family_name() const
    {
        return std::string(face_->family_name);
    }

    std::string style_name() const
    {
        return std::string(face_->style_name);
    }

    FT_Face get_face() const
    {
        return face_;
    }

    double get_char_height() const;

    bool set_character_sizes(double size);

    void glyph_dimensions(glyph_info &glyph) const;

    ~font_face();

private:
    FT_Face face_;
    mutable glyph_cache_ptr glyphs_;
    mutable double char_height_;
};
typedef std::shared_ptr<font_face> face_ptr;

inline bool operator==(face_ptr const& lhs, face_ptr const& rhs) {
    return lhs->get_face() == rhs->get_face();
}

class MAPNIK_DECL font_face_set : private mapnik::noncopyable
{
public:
    typedef std::vector<face_ptr>::iterator iterator;
    font_face_set(void) : faces_(){}

    void add(face_ptr face);
    void set_character_sizes(double size);

    unsigned size() const { return faces_.size(); }
    iterator begin() { return faces_.begin(); }
    iterator end() { return faces_.end(); }
private:
    std::vector<face_ptr> faces_;
};
typedef std::shared_ptr<font_face_set> face_set_ptr;

} //ns mapnik

#endif // FACE_HPP
