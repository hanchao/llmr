#ifndef __NODE_MAPNIK_FONTS_H__
#define __NODE_MAPNIK_FONTS_H__

// v8
#include <v8.h>
#include <nan.h>

// mapnik
#include <mapnik/font_engine_freetype.hpp>

// stl
#include <vector>

#define TOSTR(obj) (*String::Utf8Value((obj)->ToString()))

using namespace v8;

namespace node_mapnik {

static inline NAN_METHOD(register_fonts)
{
    NanScope();

    try
    {
        if (args.Length() == 0 || !args[0]->IsString())
        {
            NanThrowTypeError("first argument must be a path to a directory of fonts");
            NanReturnUndefined();
        }

        bool found = false;

        std::vector<std::string> const names_before = mapnik::freetype_engine::face_names();

        // option hash
        if (args.Length() == 2){
            if (!args[1]->IsObject())
            {
                NanThrowTypeError("second argument is optional, but if provided must be an object, eg. { recurse:Boolean }");
                NanReturnUndefined();
            }

            Local<Object> options = args[1].As<Object>();
            if (options->Has(NanNew("recurse")))
            {
                Local<Value> recurse_opt = options->Get(NanNew("recurse"));
                if (!recurse_opt->IsBoolean())
                {
                    NanThrowTypeError("'recurse' must be a Boolean");
                    NanReturnUndefined();
                }

                bool recurse = recurse_opt->BooleanValue();
                std::string path = TOSTR(args[0]);
                found = mapnik::freetype_engine::register_fonts(path,recurse);
            }
        }
        else
        {
            std::string path = TOSTR(args[0]);
            found = mapnik::freetype_engine::register_fonts(path);
        }

        std::vector<std::string> const& names_after = mapnik::freetype_engine::face_names();
        if (names_after.size() == names_before.size())
            found = false;

        NanReturnValue(NanNew(found));
    }
    catch (std::exception const& ex)
    {
        NanThrowError(ex.what());
        NanReturnUndefined();
    }
}

static inline NAN_METHOD(available_font_faces)
{
    NanScope();
    std::vector<std::string> const& names = mapnik::freetype_engine::face_names();
    Local<Array> a = NanNew<Array>(names.size());
    for (unsigned i = 0; i < names.size(); ++i)
    {
        a->Set(i, NanNew(names[i].c_str()));
    }
    NanReturnValue(a);
}

static inline NAN_METHOD(available_font_files)
{
    NanScope();
    std::map<std::string,std::pair<int,std::string> > const& mapping = mapnik::freetype_engine::get_mapping();
    Local<Object> obj = NanNew<Object>();
    std::map<std::string,std::pair<int,std::string> >::const_iterator itr;
    for (itr = mapping.begin();itr!=mapping.end();++itr)
    {
        obj->Set(NanNew(itr->first.c_str()), NanNew(itr->second.second.c_str()));
    }
    NanReturnValue(obj);
}


}

#endif // __NODE_MAPNIK_FONTS_H__
